import { observable } from 'mobx';
import Taro from '@tarojs/taro';

class SystemInfoService {
    constructor() {
        const top = Taro.getSystemInfoSync().safeArea?.top || 0;
        this.naviHeight = top === 0 ? 78 : top + 52;
        this.safeAreaTop = top;
    }

    @observable naviHeight = 0;
    @observable safeAreaTop = 0;
    isColdStarted = true;
}

const systemInfoService = new SystemInfoService();
export { systemInfoService };
