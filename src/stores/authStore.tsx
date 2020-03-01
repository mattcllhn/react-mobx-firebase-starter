import {observable, action} from 'mobx';
import navigationStore from './navigationStore';
import { create, persist } from 'mobx-persist';
import fire from '../components/firebase';
const auth = fire.auth();


class AuthStoreClass {
    
	@persist @observable uid:string = '';
	@observable hydrated:boolean=false;
	// @persist @observable accountNumber:string = '';
	// @persist @observable logoUrl:string = '';

	@action logout(){
		auth.signOut();
		this.uid = '';
		navigationStore.push('/login');
	}

	@action signup(loginRequest:any) {
		auth.createUserWithEmailAndPassword(loginRequest.email,loginRequest.password)
		.then((res:any)=>{
			this.uid = res.user.uid;
			navigationStore.push('/dashboard');
		})
	}

	@action login(loginRequest:any) {
		auth.signInWithEmailAndPassword(loginRequest.email,loginRequest.password)
		.then((res:any)=>{
			this.uid = res.user.uid;
			navigationStore.push('/dashboard');
		})
	}
}
const hydrate = create({});
const AuthStore = new AuthStoreClass();
hydrate('auth', AuthStore).then((authStore)=>{
	authStore.hydrated = true;
})

export default AuthStore;