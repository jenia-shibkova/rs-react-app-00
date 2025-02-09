import { NavLink, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getDetails } from '../../api';
import useCurrentQuery from '../../hooks/useCurrentQuery';
import { ItemDetails } from '../../api/interfaces';
import './styles.css';

const Details = (): JSX.Element => {
  const navigate = useNavigate();
  const query = useCurrentQuery();
  const { id } = useParams();
  const [item, setItem] = useState<ItemDetails>();

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          await getDetails(id).then((res) => {
            setItem(res?.data?.data?.results?.[0]);
          });
        } catch (error) {
          console.error('Error while fetching data:', error);
        }
      }
    };

    fetchData();
  }, [query, id, navigate]);

  return (
    <div className="container">
      <NavLink to={query} className="background" />
      <div className="about">
        <NavLink to={query} className="back">
          Back
        </NavLink>

        <h2>{item?.name}</h2>
        <div className="info">
          <p>{item?.description}</p>
        </div>

        {item?.comics?.available && (
          <div className="info">
            <p>Comics:</p>
            <p className="values">{item?.comics?.items.map((el) => el.name).join(', ')}</p>
          </div>
        )}

        {item?.series?.available && (
          <div className="info">
            <p>Series:</p>
            <p className="values">{item?.series?.items.map((el) => el.name).join(', ')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
