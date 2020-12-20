import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the  @quansight-labs/jupyterlab-theme-christmas extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: ' @quansight-labs/jupyterlab-theme-christmas',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension  @quansight-labs/jupyterlab-theme-christmas is activated!');
    const style = ' @quansight-labs/jupyterlab-theme-christmas/index.css';
    manager.register({
      name: 'JupyterLab Christmas',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
