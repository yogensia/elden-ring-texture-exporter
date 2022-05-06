import QtQuick 2.7
import QtQuick.Window 2.2
import AlgWidgets 2.0
import AlgWidgets.Style 2.0
import QtQuick.Dialogs 1.0
// import QtQuick.Controls 1.4
// import QtQuick.Controls.Styles 1.4

import "export.js" as Export

AlgToolBarButton
{
  id: root
  enabled: true
  iconName: "huh.png"
  tooltip: qsTr("Export Elden Ring Textures...")

  FileDialog {
    id: fileDialog
    selectFolder: true
    title: "Choose a location to your textures..."
    folder: shortcuts.documents

    onAccepted: {
      var exportPath = fileDialog.fileUrl.toString()
      Export.run(exportPath.replace('file:///', ''))
    }

    onRejected: {
      Export.log("Canceled", "warn")
    }
  }

  onClicked: {
    try {
      // fileDialog.open()
      Export.run()
    } catch(err) {
      alg.log.exception(err)
    }
  }
}