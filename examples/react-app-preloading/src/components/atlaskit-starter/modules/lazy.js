import Loading from '../components/Loading';
import Loadable from 'react-loadable';

export const HomePage=Loadable({
  loader:()=>import('../pages/HomePage'),
  loading:Loading
})

 export const SettingsPage =Loadable({
  loader: () => import('../pages/SettingsPage'),
  loading: Loading,
})

  export const NgocPage =Loadable({
  loader: () => import('../pages/NgocPage'),
  loading: Loading,
})
