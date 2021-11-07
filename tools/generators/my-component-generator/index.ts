import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { normalize } from '@angular-devkit/core'; 
import { dasherize } from '@nrwl/workspace/src/utils/strings';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (tree: Tree, schema: any) {

  if (schema.name !== dasherize(schema.name)) {      
    throw new Error(`Component names must be lowercase and dasherized.'`);     }

  await libraryGenerator(tree, { name: normalize(`ui/components/${schema.name}`) });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
