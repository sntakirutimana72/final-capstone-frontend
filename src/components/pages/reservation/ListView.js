import { collectionProps } from '../../../props/reserves';
import { isNilOrEmpty } from '../../../helpers/utils';
import NoData from '../../common/NoData';
import ListItem from './ListItem';

const Listview = ({ items }) => (
  <>
    {isNilOrEmpty(items) ? (
      <NoData />
    ) : (
      <div>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {items.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    )}
  </>
);

Listview.defaultProps = { items: null };
Listview.propTypes = { items: collectionProps };

export default Listview;
