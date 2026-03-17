// Auto-generated from: ansible.builtin.template
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface TemplateArgs {
  /** The attributes the resulting filesystem object should have. */
  attributes?: string;
  /** Create a backup file including the timestamp information so you can get the original file back if you somehow clobbered it incorrectly. */
  backup?: boolean;
  /** The string marking the end of a block. */
  block_end_string?: string;
  /** The string marking the beginning of a block. */
  block_start_string?: string;
  /** The string marking the end of a comment statement. */
  comment_end_string?: string;
  /** The string marking the beginning of a comment statement. */
  comment_start_string?: string;
  /** Location to render the template to on the remote machine. */
  dest: string;
  /** Determine whether symbolic links should be followed. */
  follow?: boolean;
  /** Determine when the file is being transferred if the destination already exists. */
  force?: boolean;
  /** Name of the group that should own the filesystem object, as would be fed to C(chown). */
  group?: string;
  /** Determine when leading spaces and tabs should be stripped. */
  lstrip_blocks?: boolean;
  /** The permissions the resulting filesystem object should have. */
  mode?: unknown;
  /** Specify the newline sequence to use for templating files. */
  newline_sequence?: "\n" | "\r" | "\r\n";
  /** Overrides the encoding used to write the template file defined by O(dest). */
  output_encoding?: string;
  /** Name of the user that should own the filesystem object, as would be fed to C(chown). */
  owner?: string;
  /** The level part of the SELinux filesystem object context. */
  selevel?: string;
  /** The role part of the SELinux filesystem object context. */
  serole?: string;
  /** The type part of the SELinux filesystem object context. */
  setype?: string;
  /** The user part of the SELinux filesystem object context. */
  seuser?: string;
  /** Path of a Jinja2 formatted template on the Ansible controller. */
  src: string;
  /** Determine when newlines should be removed from blocks. */
  trim_blocks?: boolean;
  /** Influence when to use atomic operation to prevent data corruption or inconsistent reads from the target filesystem object. */
  unsafe_writes?: boolean;
  /** The validation command to run before copying the updated file into the final destination. */
  validate?: string;
  /** The string marking the end of a print statement. */
  variable_end_string?: string;
  /** The string marking the beginning of a print statement. */
  variable_start_string?: string;
}

export interface TemplateReturn {
  /** SHA1 checksum of the rendered file */
  checksum?: string;
  /** Destination file/path, equal to the value passed to I(dest). */
  dest?: string;
  /** Numeric id representing the group of the owner */
  gid?: number;
  /** Group name of owner */
  group?: string;
  /** MD5 checksum of the rendered file */
  md5sum?: string;
  /** Unix permissions of the file in octal representation as a string */
  mode?: string;
  /** User name of owner */
  owner?: string;
  /** Size of the rendered file in bytes */
  size?: number;
  /** Source file used for the copy on the target machine. */
  src?: string;
  /** Numeric id representing the file owner */
  uid?: number;
}

export const template = defineModule<TemplateArgs, TemplateReturn>("ansible.builtin.template");
