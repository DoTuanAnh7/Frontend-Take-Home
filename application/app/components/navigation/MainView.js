import { View } from 'react-native'
import React    from 'react'

export const MainView: React.FC = ({ children, ...props }) => {
    return (
        <View flex={ 1 } padding={5} { ...props }>
            { children }
        </View>
    )
}
