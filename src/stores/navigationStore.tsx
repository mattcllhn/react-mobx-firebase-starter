import { observable } from 'mobx'
import autobind from 'autobind-decorator'
import * as importHistory from 'history';
const createBrowserHistory = importHistory.createBrowserHistory;

class NavigationStore {
  @observable location:any = null;
  history = createBrowserHistory();

  @autobind push(location:any) {
    this.history.push(location);
  }
  @autobind replace(location:any) {
    this.history.replace(location);
  }
  @autobind go(n:any) {
    this.history.go(n);
  }
  @autobind goBack() {
    this.history.goBack();
  }
  @autobind goForward() {
    this.history.goForward();
  }
}

const navigationStore = new NavigationStore();

export default navigationStore;