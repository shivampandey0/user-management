import axios from 'axios'

export const getUsers = () => {
    return axios.get(
      'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
    );
}