import { View, Image } from '@tarojs/components';
import { observer } from 'mobx-react-lite';
import { useService } from '../../service/index';

type IndexProps = {};


const Index = (props: IndexProps) => {
    const { systemInfoService } = useService();
    return (
        <View className='w-full h-screen bg-gradient-to-b from-[#32bac8] to-white flex-col overflow-hidden'>

        </View>
    );
};

export default observer(Index);
