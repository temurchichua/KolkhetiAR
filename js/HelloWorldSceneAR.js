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

          <ViroARImageMarker target={"hekate"} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>

            <Viro3DObject source={require('./res/hekate/hekate.obj')}
                          materials={["hekate"]}
                          scale={[1, 1, 1]}
                          type="OBJ"/>


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

          </ViroARImageMarker>

          <ViroARImageMarker target={"dolphin"} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>

            <Viro3DObject source={require('./res/dolphin/dolphin.obj')}
                          materials={["dolphin"]}
                          scale={[1, 1, 1]}
                          type="OBJ"/>


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

          </ViroARImageMarker>

          <ViroARImageMarker target={"goldenfleece"} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>

            <Viro3DObject source={require('./res/goldenfleece/goldenfleece.obj')}
                          materials={["goldenfleece"]}
                          scale={[1, 1, 1]}
                          type="OBJ"/>

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

          </ViroARImageMarker>

          <ViroARImageMarker target={"diadem"} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>

            <Viro3DObject source={require('./res/diadem/diadem.obj')}
                          materials={["diadem"]}
                          scale={[0.3, 0.3, 0.3]}
                          type="OBJ"/>

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
  hekate: {
    lightingModel: "Constant",
    diffuseTexture: require('./res/hekate/diffuse.png'),
    normalTexture: require('./res/hekate/normal.png'),
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
  }
});

module.exports = HelloWorldSceneAR;