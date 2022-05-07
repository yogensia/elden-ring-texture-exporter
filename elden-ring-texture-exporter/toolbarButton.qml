import QtQuick 2.7
import QtQuick.Window 2.2
import AlgWidgets 2.0
import AlgWidgets.Style 2.0

import "export.js" as Export

AlgToolBarButton
{
  id: root
  enabled: true
  iconName: "pot.png"
  tooltip: qsTr("Export Elden Ring Textures...")

  onClicked: {
    try {
      Export.run()
    } catch(err) {
      alg.log.exception(err)
    }
  }
}