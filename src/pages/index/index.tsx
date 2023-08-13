import { View, Text } from '@tarojs/components';
import { observer } from 'mobx-react';

type IndexProps = {};

const Index = (props: IndexProps) => {
    return (
        <View className='w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
            <Text>counter</Text>
        </View>
    );
};

export default observer(Index);
