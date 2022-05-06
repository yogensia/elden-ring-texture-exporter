# Elden Ring Tools for Substance Painter

[![ISC License](https://img.shields.io/badge/license-ISC-green)](https://github.com/yogensia/er-tools/blob/main/LICENSE) [![Version](https://img.shields.io/github/package-json/v/yogensia/er-tools)](https://github.com/yogensia/er-tools/blob/main/CHANGELOG.md)

Substance Painter plugin for exporting Elden Ring ready DDS textures.

---

## **IMPORTANT: Make sure to save your work before exporting your textures with the plugin! I will not be responsible for any progress loss on your work if this plugin crashes your Substance Painter!**

## Installation

- Extract the `'er-tools'` folder in This archive to `'..\My Documents\Adobe\Adobe Substance 3D Painter\plugins\'`.
- Extract the `'Elden Ring.sbexp'` file to `'..\My Documents\Adobe\Adobe Substance 3D Painter\assets\export-presets\'`.
- Open Substance Painter.
- Open the JavasScript menu and enable `er-tools`.
- You should see an icon of a cat appear in your toolbar. If you can't find it it's possible you have the plugins toolbar hidden. It can be enabled from the following menu: `Window` > `Toolbars` > `Plugins`

## Usage

- Open your project, and make sure to save your work before proceeding.
- Open the Export dialog by pressing `Ctrl` + `Shift` + `E`.
- Make sure the "Output Directory" is set to the folder where you want your textures for Elden Ring created.
- Optional: If you want a bit more info of the plugin's background process open the Log panel in Substance Painter, the plugin will output data there, such as textures being saved and DDS compression formats.
- Click on the **cat icon** in the toolbar to begin the export process and give it a moment to process everything.

The plugin will batch export albedo, metalness and normal+gloss for all the texture sets in the project. The textures will be saved as TGA first to your texture output directory which can be set in the Export dialog (Ctrl + Shift + E). Once this is complete the plugin will use TexConv to convert everything to DDS using the best guess compression settings for each format:

- **Albedo:** BC7 sRGB
- **Metalness:** BC4 Linear
- **Normal+Gloss:** BC7 Linear

Filenames are  based on texture set names, a texture set named 'armor01' will result in 'armor01_a', 'armor01_m' & 'armor01_n'.

## Roadmap

This is a very simple plugin and it's a bit rough around the edges. When I can, I'd like to improve some things, including:

- Support for more texture types, feedback is welcome on this.
- Better information while textures are converted, such a progress dialog.
- Auto deletion of TGA files.
- Settings such as texture resolution.

## Credits & Acknowledgments

Plugin written by [Yogensia](https://www.yogensia.com).

This project uses [Texconv](https://github.com/microsoft/DirectXTex) to compress DDS files, (Copyright (c) Microsoft Corporation, MIT License).

## License

Copyright (c) 2022, Yogensia

Permission to use, copy, modify, and/or distribute this software for any purpose
with or without fee is hereby granted, provided that the above copyright notice
and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
THIS SOFTWARE.

Source: [http://opensource.org/licenses/ISC](http://opensource.org/licenses/ISC)
