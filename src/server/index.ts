import {axios} from '../utils';

export const getSceneInfo = (id: number) => {
  return axios({
    url: '/api/paper',
    params: {
      sceneId: id,
    },
  })
    .then((res: object) => res)
    .catch((err: object) => err);
};

export const proxyGithubApi = () => {
  return axios({
    url: '/api/users',
    method: 'post',
  })
    .then((res: object) => res)
    .catch((err: object) => err);
};

export default {getSceneInfo, proxyGithubApi};
