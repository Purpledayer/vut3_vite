import { defineStore } from 'pinia' //引入pinia
 


// import { UserInfo } from '../api/types/common'
import { getItem, setItem } from '../utils/storage'
import { USER } from '../utils/constants'


export const Authorization=defineStore("Authorization",{ 
	state: () =>{
		return  ({
			Authorization:"这是pinia的数据",
        })  
	} 
})


type User = ({ token: string }) | null

export const useStore = defineStore('main', {
	state: () => ({
		count: 0,
		isCollapse: false,
		user: getItem<User>(USER)
	}),
	getters: {
		doubleCount(state) {
			return state.count * 2
		}
	},
	actions: {
		increment() {
			this.count++
		},
		setUser(payload: User) {
			this.user = payload
			setItem(USER, this.user)
		}
	}
})

 
export const initStatusStore = defineStore({
	id: 'initStatus', 
	state: () => {
		return {
		  initStatus: false
		}
	},
	actions: {
		updateName(status: boolean) {
			this.initStatus = status
		}
	}
})
   