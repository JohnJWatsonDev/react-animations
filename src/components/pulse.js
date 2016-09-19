import { scale3d } from '../utils';

const pulse = {
  from: {
    transform: scale3d(1, 1, 1),
  },
  '50%': {
    transform: scale3d(1.05, 1.05, 1.05),
  },
  to: {
    transform: scale3d(1, 1, 1),
  },
}

export default pulse;
