import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({theme}) => theme.colors.text};
  font-family: 'Arial';
  margin: 10px 0 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${({theme}) => theme.colors.background};
  border-top-width: 1px;
  border-color: ${({theme}) => theme.colors.inputColor};
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: #00ff78;
  font-size: 18px;
  font-family: 'Arial';
  margin-left: 16px;
`;
