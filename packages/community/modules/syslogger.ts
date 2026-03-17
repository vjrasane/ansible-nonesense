// Auto-generated from: community.general.syslogger
// DO NOT EDIT — regenerate with codegen

import { defineModule } from "@sensible-ts/core";

export interface SysloggerArgs {
  /** Set the log facility. */
  facility?: "kern" | "user" | "mail" | "daemon" | "auth" | "lpr" | "news" | "uucp" | "cron" | "syslog" | "local0" | "local1" | "local2" | "local3" | "local4" | "local5" | "local6" | "local7";
  /** Specify the name of application name which is sending the log to syslog. */
  ident?: string;
  /** Log the PID in brackets. */
  log_pid?: boolean;
  /** This is the message to place in syslog. */
  msg: string;
  /** Set the log priority. */
  priority?: "emerg" | "alert" | "crit" | "err" | "warning" | "notice" | "info" | "debug";
}

export interface SysloggerReturn {
  /** Syslog facility. */
  facility?: string;
  /** Name of application sending the message to log. */
  ident?: string;
  /** Log PID status. */
  log_pid?: boolean;
  /** Message sent to syslog. */
  msg?: string;
  /** Priority level. */
  priority?: string;
}

export const syslogger = defineModule<SysloggerArgs, SysloggerReturn>("community.general.syslogger");
