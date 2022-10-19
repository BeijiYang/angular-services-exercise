export class CountService {
  toActiveNum: number = 0;
  toInactiveNum: number = 0;

  toActive() {
    this.toActiveNum += 1;
    console.log('to active counts: ' + this.toActiveNum);
  }

  toInactive() {
    this.toInactiveNum += 1;
    console.log('to inactive counts: ' + this.toInactiveNum);
  }
}