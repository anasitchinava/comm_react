import DataFetcher from '../lib/dataFetcher';
import DataDrawer from '../lib/dataDrawer';

const DataFetch = () => {
  return (
    <DataFetcher>
      {({ products, isLoading }) => (
        <DataDrawer products={products} isLoading={isLoading} />
      )}
    </DataFetcher>
  );
};

export default DataFetch;
