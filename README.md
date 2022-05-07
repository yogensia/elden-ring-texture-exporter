# Elden Ring Tools for Substance Painter

[![ISC License](https://img.shields.io/badge/license-MIT-green)](https://github.com/yogensia/elden-ring-texture-exporter/blob/main/LICENSE) [![Version](https://img.shields.io/github/package-json/v/yogensia/er-tools)](https://github.com/yogensia/elden-ring-texture-exporter/blob/main/CHANGELOG.md)

Substance Painter plugin for exporting Elden Ring ready DDS textures.

---

## **IMPORTANT: Make sure to save your work before exporting your textures with the plugin! I will not be responsible for any progress loss on your work if this plugin crashes your Substance Painter!**

**Note:** If you share this software on discord or Nexus, etc... don't share the download directly, [instead please provide a link to this page](https://github.com/yogensia/elden-ring-texture-exporter) which always contains the latest version. You can [report bugs/suggestions here](https://github.com/yogensia/elden-ring-texture-exporter/issues), or message me on Discord: `Yogensia#2391`.

## Installation

- Extract the `er-tools` folder in This archive to `..\My Documents\Adobe\Adobe Substance 3D Painter\plugins\`.
- Extract the `Elden Ring.sbexp` file to `..\My Documents\Adobe\Adobe Substance 3D Painter\assets\export-presets\`.
- Open Substance Painter.
- Open the JavasScript menu and enable `elden-ring-texture-exporter`.
- You should see an icon of a Pot Friend appear in your toolbar. If you can't find it it's possible you have the plugins toolbar hidden. It can be enabled from the following menu: `Window` > `Toolbars` > `Plugins`.

## Usage

- Open your project, and make sure to save your work before proceeding.
- Open the Export dialog by pressing `Ctrl` + `Shift` + `E`.
- Make sure the "Output Directory" is set to the folder where you want your textures for Elden Ring created.
- Optional: If you want a bit more info of the plugin's background process open the Log panel in Substance Painter, the plugin will output data there, such as textures being saved and DDS compression formats.
- Click on the golden **Pot Friend** button in the toolbar to begin the export process and give it a moment to complete.

The plugin will batch export Albedo, Metal and Normal+Gloss for all the texture sets in the project. The textures will be saved as TGA to your texture output directory. Once this is complete the plugin will use TexConv to convert everything to DDS using these best guess compression settings for each format:

- **Albedo:** BC7 sRGB
- **Metal:** BC4 Linear
- **Normal+Gloss:** BC7 Linear

Filenames are based on texture set names, a texture set named 'armor01' will result in 'armor01_a', 'armor01_m' & 'armor01_n'.

Exported textures resolution will match that of your project's texture sets.

## Roadmap

This is a very simple plugin and it's a bit rough around the edges. When I can, I'd like to improve some things, including:

- Support for more texture types such as emissive, feedback is welcome on this.
- Better information while textures are converted, such a progress dialog.
- Auto deletion of TGA files if possible.
- Settings such as texture resolution.
- Improve error handling.

## Credits & Acknowledgments

Plugin written by [Yogensia](https://www.yogensia.com).

This project uses [Texconv](https://github.com/microsoft/DirectXTex) to compress DDS files, (Copyright (c) Microsoft Corporation, MIT License).

## License

MIT License

Copyright (c) 2022 Yogensia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
