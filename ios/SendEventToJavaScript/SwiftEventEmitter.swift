//
//  SwiftEventEmitter.swift
//  SendEventToJavaScript
//
//  Created by Coty Embry on 4/9/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

import Foundation


var bridgeHelperInstance = PublicBridgeHelper()


@objc(SwiftEventEmitter)
class SwiftEventEmitter: NSObject {
  

  
  @objc(sendEventToJS)
  func sendEventToJS() {
    
    //1. get a reference to the bridge
    
    let jsBridge = bridgeHelperInstance.getBridge()             //this gets the bridge from the main rootView created in AppDelegate.m
    
    //jsBridge.
    //globalInstance.sendEvent(withBridge: bridge!)
    
    print("jsBridge = \(jsBridge)")
    
    jsBridge?.eventDispatcher().sendAppEvent(withName: "test", body: ["Yo"])		
    
    
    //__bridge?.eventDispatcher().sendAppEvent(withName: "test", body: ["Yo"])
    
  }
}

