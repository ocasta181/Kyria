import { Loading } from 'element-ui';

const loadingOptions = {
  lock: true
};


let loadingInstance = null;
export const loader = {
  start() {
      loadingInstance = Loading.service(loadingOptions);
  },
  stop() {
      if (loadingInstance) {
          loadingInstance.close();
          loadingInstance = null;
      }
  }
};