import { type AnsibleModuleMeta, defineRemoteModule, type RemoteModuleSpec } from "@sensible-ts/core";
import { ansibleCore, communityGeneral, coreScaffold } from "./artifacts.ts";

// Auto-generated from: community.general.xml
// DO NOT EDIT — regenerate with codegen
const meta: AnsibleModuleMeta = {
  "fqcn": "community.general.xml",
  "actionPlugin": false,
  "powershell": false,
  "rawParams": false,
  "checkMode": "full",
} as const;
const spec: RemoteModuleSpec = {
  fqcn: "community.general.xml",
  moduleFqn: "ansible_collections.community.general.plugins.modules.xml",
  sources: [{
    artifact: ansibleCore,
    files: [
      "ansible/module_utils/_internal/__init__.py",
      "ansible/module_utils/_internal/_ansiballz/_loader.py",
      "ansible/module_utils/_internal/_dataclass_validation.py",
      "ansible/module_utils/_internal/_datatag/__init__.py",
      "ansible/module_utils/_internal/_datatag/_tags.py",
      "ansible/module_utils/_internal/_debugging.py",
      "ansible/module_utils/_internal/_deprecator.py",
      "ansible/module_utils/_internal/_errors.py",
      "ansible/module_utils/_internal/_event_utils.py",
      "ansible/module_utils/_internal/_json/__init__.py",
      "ansible/module_utils/_internal/_json/_legacy_encoder.py",
      "ansible/module_utils/_internal/_json/_profiles/__init__.py",
      "ansible/module_utils/_internal/_json/_profiles/_module_legacy_c2m.py",
      "ansible/module_utils/_internal/_json/_profiles/_module_legacy_m2c.py",
      "ansible/module_utils/_internal/_json/_profiles/_tagless.py",
      "ansible/module_utils/_internal/_messages.py",
      "ansible/module_utils/_internal/_patches/__init__.py",
      "ansible/module_utils/_internal/_patches/_dataclass_annotation_patch.py",
      "ansible/module_utils/_internal/_patches/_socket_patch.py",
      "ansible/module_utils/_internal/_patches/_sys_intern_patch.py",
      "ansible/module_utils/_internal/_plugin_info.py",
      "ansible/module_utils/_internal/_stack.py",
      "ansible/module_utils/_internal/_text_utils.py",
      "ansible/module_utils/_internal/_traceback.py",
      "ansible/module_utils/_internal/_validation.py",
      "ansible/module_utils/basic.py",
      "ansible/module_utils/common/_utils.py",
      "ansible/module_utils/common/arg_spec.py",
      "ansible/module_utils/common/collections.py",
      "ansible/module_utils/common/file.py",
      "ansible/module_utils/common/json.py",
      "ansible/module_utils/common/locale.py",
      "ansible/module_utils/common/parameters.py",
      "ansible/module_utils/common/process.py",
      "ansible/module_utils/common/sys_info.py",
      "ansible/module_utils/common/text/converters.py",
      "ansible/module_utils/common/text/formatters.py",
      "ansible/module_utils/common/validation.py",
      "ansible/module_utils/common/warnings.py",
      "ansible/module_utils/compat/selinux.py",
      "ansible/module_utils/compat/typing.py",
      "ansible/module_utils/compat/version.py",
      "ansible/module_utils/datatag.py",
      "ansible/module_utils/distro/__init__.py",
      "ansible/module_utils/distro/_distro.py",
      "ansible/module_utils/errors.py",
      "ansible/module_utils/parsing/convert_bool.py",
      "ansible/module_utils/six/__init__.py",
    ],
  }, {
    artifact: communityGeneral,
    files: [
      "plugins/module_utils/_deps.py",
      "plugins/module_utils/_version.py",
      "plugins/module_utils/_xml.py",
      "plugins/modules/xml.py",
    ],
  }],
  scaffold: coreScaffold,
  markers: [
    "ansible/module_utils/_internal/_ansiballz/__init__.py",
    "ansible/module_utils/common/__init__.py",
    "ansible/module_utils/common/text/__init__.py",
    "ansible/module_utils/compat/__init__.py",
    "ansible/module_utils/parsing/__init__.py",
    "ansible_collections/__init__.py",
    "ansible_collections/community/__init__.py",
    "ansible_collections/community/general/__init__.py",
    "ansible_collections/community/general/plugins/__init__.py",
    "ansible_collections/community/general/plugins/module_utils/__init__.py",
    "ansible_collections/community/general/plugins/modules/__init__.py",
  ],
} as const;
export interface XmlArgs {
  /** Add additional child-element(s) to a selected element for a given O(xpath). */
  add_children?: unknown | unknown[];
  /** The attribute to select when using parameter O(value). */
  attribute?: unknown;
  /** Create a backup file including the timestamp information so you can get the original file back if you somehow clobbered it incorrectly. */
  backup?: boolean;
  /** Search for a given O(xpath) and get content. */
  content?: "attribute" | "text";
  /** Search for a given O(xpath) and provide the count of any matches. */
  count?: boolean;
  /** When using O(value) and the O(xpath) matches no nodes, create the node. */
  create_if_missing?: boolean;
  /** Disable libxml2 security restrictions on XML node size or document depth, allowing processing of very large XML files. */
  huge_tree?: boolean;
  /** Type of input for O(add_children) and O(set_children). */
  input_type?: "xml" | "yaml";
  /** Add additional child-element(s) after the last selected element for a given O(xpath). */
  insertafter?: boolean;
  /** Add additional child-element(s) before the first selected element for a given O(xpath). */
  insertbefore?: boolean;
  /** The namespace C(prefix:uri) mapping for the XPath expression. */
  namespaces?: Record<string, unknown>;
  /** Path to the file to operate on. */
  path?: string;
  /** Pretty print XML output. */
  pretty_print?: boolean;
  /** Search for a given O(xpath) and print out any matches. */
  print_match?: boolean;
  /** Set the child-element(s) of a selected element for a given O(xpath). */
  set_children?: unknown | unknown[];
  /** Set or remove an xpath selection (node(s), attribute(s)). */
  state?: "absent" | "present";
  /** Remove CDATA tags surrounding text values. */
  strip_cdata_tags?: boolean;
  /** Desired state of the selected attribute. */
  value?: unknown;
  /** A string containing XML on which to operate. */
  xmlstring?: string;
  /** A valid XPath expression describing the item(s) you want to operate on. */
  xpath?: string;
}

export interface XmlReturn {
  /** A dictionary with the original xpath, namespaces and state. */
  actions?: Record<string, unknown>;
  /** The count of xpath matches. */
  count?: number;
  /** The xpath matches found. */
  matches?: string | string[];
  /** An XML string of the resulting output. */
  xmlstring?: string;
}
export const xml = defineRemoteModule<XmlArgs, XmlReturn>(spec, meta);
