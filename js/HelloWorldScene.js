// 'use strict';
//
// import React, { Component } from 'react';
//
// import {StyleSheet} from 'react-native';
//
// import {
//     ViroScene,
//     ViroText,
//     Viro360Image,
//     Viro3DObject,
//     ViroARImageMarker,
//     ViroMaterials,
// } from 'react-viro';
//
//
// export default class HelloWorldScene extends Component {
//
//     constructor() {
//         super();
//
//         this.state = {} // Set initial state here
//     }
//
//     render() {
//         return (
//             <ViroScene>
//                 <Viro360Image source={require('./res/guadalupe_360.jpg')} />
//                 <ViroText text="Hello World!" width={2} height={2} position={[0, 0, -2]} style={styles.helloWorldTextStyle} />
//                 <Viro3DObject source={require('./res/goldenfleece/goldenfleece.obj')}
//                               materials={["goldenfleece"]}
//                               scale={[.1,.1,.1]}
//                               position={[0, -1, -1]}
//                               type="OBJ"/>
//             </ViroScene>
//         );
//     }
//
// }
//
// var styles = StyleSheet.create({
//     helloWorldTextStyle: {
//         fontFamily: 'Arial',
//         fontSize: 60,
//         color: '#ffffff',
//         textAlignVertical: 'center',
//         textAlign: 'center',
//     },
// });
//
// ViroMaterials.createMaterials({
//     grid: {
//         diffuseTexture: require('./res/grid_bg.jpg'),
//     },
//     goldenfleece: {
//         lightingModel: "Constant",
//         diffuseTexture: require('./res/goldenfleece/goldenfleeceSurface_Color.png'),
//         normalTexture: require('./res/goldenfleece/goldenfleeceNormal.png'),
//         specularTexture: require('./res/goldenfleece/goldenfleeceAmbient_Occlusion.png')
//     },
// });
//
// module.exports = HelloWorldScene;
