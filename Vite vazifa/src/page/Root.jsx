import {  Layout} from 'antd';
import Sidebar from '../assets/layout/sidebar';
import MyHeader from '../assets/layout/Myheader';
import MyContent from '../assets/layout/MyContent';


const Root = () => {
  return (
    <Layout style={{minHeight:'100%'}}>
     <Sidebar />
        <Layout>
        <MyHeader />
 
        <Layout
        style={{padding:'24px'}}
        >
        <MyContent />
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Root;