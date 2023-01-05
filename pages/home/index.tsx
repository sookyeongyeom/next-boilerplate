import { DefaultLayout, HomePage } from '@components';
import { setLayout } from '@utils/setLayout';

export default function index() {
  return <HomePage />;
}

setLayout(index, DefaultLayout);
