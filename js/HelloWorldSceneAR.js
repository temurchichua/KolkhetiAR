'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  Viro3DObject,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroSpotLight,
  ViroQuad
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
        <ViroARScene onTrackingUpdated={this._onInitialized} >
          <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
          {/*<ViroBox position={[0, -.5, -1]} scale={[.3, .3, .1]} materials={["grid"]} />*/}
          <ViroARImageMarker target={"logo"} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>

            {/*<Viro3DObject source={require('./res/alien/untitled_obj.obj')}*/}
            {/*              scale={[.001,.001,.001]}*/}
            {/*              materials={["aliengirl"]}*/}
            {/*              type="OBJ"/>*/}

            <Viro3DObject source={require('./res/hekate/untitled_obj.obj')}
                          resources={[require('./res/hekate/untitled.mtl'),
                                      require('./res/hekate/3Surface_Color.png'),]}
                          scale={[.001,.001,.001]}
                          type="OBJ"/>


            <ViroSpotLight
                innerAngle={5}
                outerAngle={25}
                direction={[0,-1,0]}
                position={[0, 5, 1]}
                color="#ffffff"
                castsShadow={true}
                shadowMapSize={2048}
                shadowNearZ={2}
                shadowFarZ={7}
                shadowOpacity={.7} />

            <ViroQuad
                rotation={[-90, 0, 0]}
                position={[0, -0.001, 0]}
                width={2.5} height={2.5}
                arShadowReceiver={true} />

          </ViroARImageMarker>
        </ViroARScene>
    );
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
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/grid_bg.jpg'),
  },
  aliengirl: {
    lightingModel: "Constant",
    diffuseTexture: require('./res/alien/aliengirl_diffuse.png'),
    normalTexture: require('./res/alien/aliengirl_normal.png'),
    specularTexture: require('./res/alien/aliengirl_specular.png')
  },
});

ViroARTrackingTargets.createTargets({
  logo : {
    source : require('./res/img.png'),
    orientation : "Up",
    physicalWidth : 0.110 // real world width in meters
  }
});

module.exports = HelloWorldSceneAR;