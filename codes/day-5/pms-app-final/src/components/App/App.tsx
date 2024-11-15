
import DashBoard from '../common/dash-board/DashBoard';
import './App.css';
import AppRoutes from '../../routes/AppRoutes';

function App() {
  return (
    <div>
      <DashBoard />
      <br />
      <div className='container'>
        {/* placeholder: any routed component will be rendered here dynamically */}
        {/* <Routes>
          <Route path='products'>
            <Route path='' element={<ProductList />} />
            <Route path='add' element={<AddProduct />} />
            <Route path='view/:id  ' element={<ProductDetail />} />
            <Route path='edit/:id  ' element={<EditProduct />} />
          </Route>
          <Route path=''>
            <Route path='' element={<Home />} />
            <Route path='home' element={<Home />} />
          </Route>
          <Route path='/*' element={<PageNotFound />} />
        </Routes> */}
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
