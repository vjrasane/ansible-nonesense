// Auto-generated — DO NOT EDIT

import type { Artifact, ScaffoldFile } from "@sensible-ts/core";

export const ansibleCore: Artifact = {
  "id": "ansible-core@2.19.13",
  "url":
    "https://files.pythonhosted.org/packages/70/10/fb022a98682af71ec7b21ea24dab3103af1c85ae884ac21c9e3f0a2ded9b/ansible_core-2.19.13.tar.gz",
  "sha256": "3711fc5db7a265f93b34cf3f0db8b9708fb0eec12211a6be32ed6edd6c68044b",
  "format": "tar.gz",
  "root": "ansible_core-2.19.13/lib",
} as const;
export const coreScaffold: ScaffoldFile[] = [{
  "path": "ansible/__init__.py",
  "content":
    'from pkgutil import extend_path\n__path__=extend_path(__path__,__name__)\n__version__="2.19.13"\n__author__="Ansible, Inc."\n',
}, {
  "path": "ansible/module_utils/__init__.py",
  "content": "from pkgutil import extend_path\n__path__=extend_path(__path__,__name__)\n",
}] as const;

