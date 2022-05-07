import QtQuick 2.7
import Painter 1.0

PainterPlugin {
  Component.onCompleted: {
    // Create toolbar buttons.
    var t = alg.ui.addWidgetToPluginToolBar("toolbarButton.qml")
  }
}
