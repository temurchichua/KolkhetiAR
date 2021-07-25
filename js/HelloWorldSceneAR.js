'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroAmbientLight,
  ViroMaterials,
  Viro3DObject,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroSpotLight,
  ViroQuad,
  ViroAnimations
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR...",
      animateHekate: false,
      animateDolphin: false,
      animateGoldenfleece: false,
      animateBorjgali: false,
      animateHead: false,
      animatePanther: false,
      animateDiadem: false,
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
        <ViroARScene onTrackingUpdated={this._onInitialized} >
          <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />

          <ViroARImageMarker target={"hekate"} onAnchorFound={this._onHekateFound} pauseUpdates={this.state.pauseUpdates}>

            <Viro3DObject source={require('./res/hekate/hekate.obj')}
                          materials={["hekate"]}
                          opacity={0}
                          scale={[0.1, 0.1, 0.1]}
                          animation={{name:'mainAnimation',
                            run:this.state.animateHekate,
                            delay:500,
                            onFinish: this._onHekateFinished }}
                          type="OBJ"/>

          </ViroARImageMarker>

          <ViroARImageMarker target={"dolphin"} onAnchorFound={this._onDolphinFound} pauseUpdates={this.state.pauseUpdates}>

            <Viro3DObject source={require('./res/dolphin/dolphin.obj')}
                          materials={["dolphin"]}
                          scale={[0.1, 0.1, 0.1]}
                          animation={{name:'mainAnimation',
                            run:this.state.animateDolphin,
                            delay:500}}
                          type="OBJ"/>

          </ViroARImageMarker>

          <ViroARImageMarker target={"goldenfleece"} onAnchorFound={this._onGoldenfleeceFound} pauseUpdates={this.state.pauseUpdates}>

            <Viro3DObject source={require('./res/goldenfleece/goldenfleece.obj')}
                          materials={["goldenfleece"]}
                          scale={[0.1, 0.1, 0.1]}
                          animation={{name:'mainAnimation',
                            run:this.state.animateGoldenfleece,
                            delay:500}}
                          type="OBJ"/>

          </ViroARImageMarker>

          <ViroARImageMarker target={"borjgali"} onAnchorFound={this._onBorjgaliFound} pauseUpdates={this.state.pauseUpdates}>

            <Viro3DObject source={require('./res/borjgali/borjgali.obj')}
                          type="OBJ"
                          materials={["borjgali"]}
                          scale={[0.1, 0.1, 0.1]}
                          animation={{name:'mainAnimation',
                            run:this.state.animateBorjgali,
                            delay:500}}
            />

          </ViroARImageMarker>

          <ViroARImageMarker target={"head"} onAnchorFound={this._onHeadFound} pauseUpdates={this.state.pauseUpdates}>

            <Viro3DObject source={require('./res/head/head.obj')}
                          materials={["head"]}
                          scale={[1.5, 1.5, 1.5]}
                          animation={{name:'mainAnimation',
                            run:this.state.animateHead,
                            delay:500}}
                          type="OBJ"/>

          </ViroARImageMarker>


          <ViroARImageMarker target={"panther"} onAnchorFound={this._onPantherFound} pauseUpdates={this.state.pauseUpdates}>

            <Viro3DObject source={require('./res/panther/panther.obj')}
                          materials={["panther"]}
                          scale={[1, 1, 1]}
                          animation={{name:'mainAnimation',
                            run:this.state.animatePanther,
                            delay:500}}
                          type="OBJ"/>

          </ViroARImageMarker>

          <ViroARImageMarker target={"diadem"} onAnchorFound={this._onDiademFound} pauseUpdates={this.state.pauseUpdates}>

            <Viro3DObject source={require('./res/diadem/diadem.obj')}
                          materials={["diadem"]}
                          scale={[0.7, 0.7, 0.7]}
                          animation={{name:'mainAnimation',
                            run:this.state.animateDiadem,
                            delay:500}}
                          type="OBJ"/>

          </ViroARImageMarker>

          <ViroSpotLight
              innerAngle={5}
              outerAngle={25}
              direction={[0,-1,0]}
              position={[0, 3, 1]}
              color="#ffffff"
              castsShadow={true}
              shadowMapSize={2048}
              shadowNearZ={2}
              shadowFarZ={7}
              shadowOpacity={.7} />

          <ViroAmbientLight color="#FFFFFF" />

          <ViroQuad
              rotation={[-90, 0, 0]}
              position={[0, -0.001, 0]}
              width={2.5} height={2.5}
              arShadowReceiver={true} />

        </ViroARScene>
    );
  }

  _onHekateFound = () => {
    this.setState({
      animateHekate: true
    });
    console.debug(this.state.animateHekate);
  }
  // https://stackoverflow.com/questions/49997025/check-whether-the-arreferenceimage-is-no-longer-visible-in-the-cameras-view
  _onHekateFinished = () => {
    this.setState({
      animateHekate: false
    });
    console.debug(this.state.animateHekate);
  }
  _onDolphinFound = () => {
    this.setState({
      animateDolphin: true
    });
  }
  _onHeadFound = () => {
    this.setState({
      animateHead: true
    });
  }
  _onPantherFound = () => {
    this.setState({
      animatePanther: true
    });
  }
  _onDiademFound = () => {
    this.setState({
      animateDiadem: true
    });
  }

  _onGoldenfleeceFound = () => {
    this.setState({
      animateGoldenfleece: true
    });
  }

  _onBorjgaliFound = () => {
    this.setState({
      animateBorjgali: true
    });
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Koklheti AR"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 60,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

ViroMaterials.createMaterials({
  diadem: {
    lightingModel: "Constant",
    diffuseTexture: require('./res/diadem/diffuse.png'),
    normalTexture: require('./res/diadem/norm.png'),
  },
  goldenfleece: {
    lightingModel: "Constant",
    diffuseTexture: require('./res/goldenfleece/diffuse.png'),
    normalTexture: require('./res/goldenfleece/norm.png'),
  },
  dolphin: {
    lightingModel: "Constant",
    diffuseTexture: require('./res/dolphin/diffuse.png'),
    normalTexture: require('./res/dolphin/dolphinNormal.png'),
  },
  panther: {
    lightingModel: "Constant",
    diffuseTexture: require('./res/panther/panther.png'),
  },
  head: {
    lightingModel: "Constant",
    diffuseTexture: require('./res/head/head.png'),
  },
  borjgali: {
    lightingModel: "Constant",
    diffuseTexture: require('./res/borjgali/outlineSurface_Color.png'),
  },
  hekate: {
    lightingModel: "Constant",
    diffuseTexture: require('./res/hekate/black.png'),
  },
});

ViroARTrackingTargets.createTargets({
  diadem : {
    source : require('./res/markers/diadem.png'),
    orientation : "Up",
    physicalWidth : 0.110 // real world width in meters
  },
  hekate : {
    source : require('./res/markers/hekate.png'),
    orientation : "Up",
    physicalWidth : 0.1 // real world width in meters
  },
  dolphin : {
    source : require('./res/markers/dolphin.png'),
    orientation : "Up",
    physicalWidth : 0.110 // real world width in meters
  },
  goldenfleece : {
    source : require('./res/markers/goldenfleece.png'),
    orientation : "Up",
    physicalWidth : 0.110 // real world width in meters
  },
  borjgali : {
    source : require('./res/markers/borjgali.png'),
    orientation : "Up",
    physicalWidth : 0.110 // real world width in meters
  },
  head : {
    source : require('./res/markers/head.png'),
    orientation : "Up",
    physicalWidth : 0.110 // real world width in meters
  },
  panther : {
    source : require('./res/markers/panther.png'),
    orientation : "Up",
    physicalWidth : 0.110 // real world width in meters
  },
});

function _onAnimationFinished() {
  console.log("Animation has finished!");
}

ViroAnimations.registerAnimations({
  scaleUp:{properties:{scaleX:1, scaleY:1, scaleZ:1, opacity: 1},
    duration: 1000, easing: "EaseIn"},
  loopRotate: { properties: { rotateY: "+=720" },
    easing:"EaseInEaseOut",
    duration: 20000 },
  fadeOut:{properties:{scaleX:0, scaleY:0, scaleZ:0, opacity: 0},
    easing:"Bounce", duration: 1000},
  mainAnimation:[
    ["scaleUp", "loopRotate", "fadeOut"],
  ]
});

module.exports = HelloWorldSceneAR;