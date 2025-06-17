// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorAlarmPlugin",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapacitorAlarmPlugin",
            targets: ["myPluginPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "myPluginPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/myPluginPlugin"),
        .testTarget(
            name: "myPluginPluginTests",
            dependencies: ["myPluginPlugin"],
            path: "ios/Tests/myPluginPluginTests")
    ]
)