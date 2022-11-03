import { collectionProps } from '../../../props/reserves';
import { isNilOrEmpty } from '../../../helpers/utils';
import ListItem from './ListItem';

const Listview = ({ items }) => (
  <>
    {
      isNilOrEmpty(items) ? (
        <div className="flex flex-col flex-auto justify-center items-center">
          <p className="text-6xl text-gray-300">Empty</p>
        </div>
      ) : (
        <div>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            {items.map((item) => <ListItem key={item.id} item={item} />)}
          </div>
        </div>
      )
    }
  </>

);

Listview.defaultProps = { items: null };
Listview.propTypes = { items: collectionProps };

export default Listview;
