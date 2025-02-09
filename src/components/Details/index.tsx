import { NavLink, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getDetails } from '../../api';
import useCurrentQuery from '../../hooks/useCurrentQuery';
import { ItemDetails } from '../../api/interfaces';
import { Loader } from '../../components';
import './styles.css';

const Details = (): JSX.Element => {
  const navigate = useNavigate();
  const query = useCurrentQuery();
  const { id } = useParams();
  const [item, setItem] = useState<ItemDetails>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  console.log('item', JSON.stringify(item));
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        setLoading(true);

        try {
          await getDetails(id).then((res) => {
            setItem(res?.data?.data?.results?.[0]);
          });
        } catch (error) {
          console.error('Error while fetching data:', error);
          setError('Something went wrong');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [query, id, navigate]);

  if (isLoading || error) {
    return (
      <div data-testid="details" className="container">
        <NavLink to={query} className="background" />
        <div className="about">
          {!error && (
            <div className="loader-wrapper" data-testid="loading-details">
              <Loader />
            </div>
          )}
          {error && (
            <div className="loader-wrapper">
              <p>{error}</p>
            </div>
          )}
          <NavLink to={query} className="back">
            Back
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="container" data-testid="details">
      <NavLink to={query} className="background" />
      <div className="about">
        <NavLink to={query} className="back">
          Back
        </NavLink>

        <h2 className="description-title">{item?.name}</h2>
        {item?.description && (
          <div className="info">
            <p className="section-title">{item?.description}</p>
          </div>
        )}

        {item?.comics?.available && (
          <div className="info">
            <p className="section-title">Comics:</p>
            <p className="values">{item?.comics?.items.map((el) => el.name).join(', ')}</p>
          </div>
        )}

        {item?.series?.available && (
          <div className="info">
            <p className="section-title">Series:</p>
            <p className="values">{item?.series?.items.map((el) => el.name).join(', ')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
