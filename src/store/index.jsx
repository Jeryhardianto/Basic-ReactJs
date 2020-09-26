//state management Recoil 
import Axios from 'axios';
import { selector, atom } from 'recoil'

//1.atom -> change theme
const theme = atom({
    key: 'switch-theme',
    default: 'dark'
})




const authUser = selector({
    key: 'uth-user',
    get: async () => {
        let user = null;

        try {
            let { data } = await Axios.get('http://jsonplaceholder.typicode.com/users/2')
            user = { user: data }
        } catch (e) {
            user = { user: e.message }

        }
        return user
    }
})

//2.atom -> change theme
export { authUser, theme }