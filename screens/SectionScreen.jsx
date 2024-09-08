import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
// Styled components using nativewind
const SView = styled(View);
const SText = styled(Text);
const SImage = styled(Image);
const STouchableOpacity = styled(TouchableOpacity);


  const SectionScreen = ({ }) => {
    const navigation = useNavigation(); 
  return (
    <SView className='pt-14 bg-slate-300 flex-1'>
      <SView className='border-black my-6 mx-3 h-14 border-solid items-center flex flex-row justify-evenly rounded-xl bg-white '>
      <STouchableOpacity onPress={() => navigation.canGoBack() ? navigation.goBack() : console.log('No screen to go back to')}>
          <SImage 
            source={require('../assets/appIMG/arrow_back.png')}
          />
          </STouchableOpacity>
        <SText className='font-bold text-2xl'>Select section</SText>
      </SView>

      <STouchableOpacity onPress={() => navigation.navigate('sectionmenu')}
       className='mx-6 mt-43 h-24 border-solid items-center flex flex-row justify-evenly rounded-xl bg-slate-100 '>
        <SText className='font-bold text-3xl'>A Section</SText>
        <SView className='flex flex-row space-x-5'> 
        <STouchableOpacity onPress={() => navigation.navigate('sectionedit')}>
        <SImage
              source={require('../assets/appIMG/Edit.png')}
            />
        </STouchableOpacity>
        <STouchableOpacity onPress={() => navigation.navigate('sectiondelete')}>
        <SImage
              source={require('../assets/appIMG/delete.png')}
            />
        </STouchableOpacity> 
        </SView>
      </STouchableOpacity>

      <STouchableOpacity onPress={() => navigation.navigate('sectionmenu')}
       className='mx-6 mt-3 h-24 bg-slate-100 border-solid items-center flex flex-row justify-evenly rounded-xl'>
        <SText className='font-bold text-3xl'>B section</SText>
        <SView className='flex flex-row space-x-5'> 
        <STouchableOpacity onPress={() => navigation.navigate('sectionedit')}>
        <SImage
              source={require('../assets/appIMG/Edit.png')}
            />
        </STouchableOpacity>
        <STouchableOpacity onPress={() => navigation.navigate('sectiondelete')}>
        <SImage
              source={require('../assets/appIMG/delete.png')}
            />
        </STouchableOpacity> 
        </SView>
      </STouchableOpacity>

      
    </SView>
  );
}


export default withExpoSnack(SectionScreen);
