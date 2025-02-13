/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { i18n } from '@kbn/i18n';

export const TOOLTIP = {
  hostCount: i18n.translate('xpack.infra.hostsViewPage.metrics.tooltip.hostCount', {
    defaultMessage: 'Number of hosts returned by your search criteria.',
  }),

  cpuUsage: i18n.translate('xpack.infra.hostsViewPage.metrics.tooltip.cpuUsage', {
    defaultMessage:
      'Percentage of CPU time spent in states other than Idle and IOWait, normalized by the number of CPU cores. This includes both time spent on user space and kernel space.',
  }),
  diskSpaceUsage: i18n.translate('xpack.infra.hostsViewPage.metrics.tooltip.diskSpaceUsage', {
    defaultMessage: 'Percentage of disk space used.',
  }),
  diskLatency: i18n.translate('xpack.infra.hostsViewPage.metrics.tooltip.diskLatency', {
    defaultMessage: 'Time spent to service disk requests.',
  }),
  memoryFree: i18n.translate('xpack.infra.hostsViewPage.metrics.tooltip.memoryFree', {
    defaultMessage: 'Total available memory including page cache.',
  }),
  memoryTotal: i18n.translate('xpack.infra.hostsViewPage.metrics.tooltip.memoryTotal', {
    defaultMessage: 'Total memory capacity.',
  }),
  memoryUsage: i18n.translate('xpack.infra.hostsViewPage.metrics.tooltip.memoryUsage', {
    defaultMessage: 'Percentage of main memory usage excluding page cache.',
  }),
  normalizedLoad1m: i18n.translate('xpack.infra.hostsViewPage.metrics.tooltip.normalizedLoad1m', {
    defaultMessage: '1 minute load average normalized by the number of CPU cores. ',
  }),
  rx: i18n.translate('xpack.infra.hostsViewPage.metrics.tooltip.rx', {
    defaultMessage:
      'Number of bytes which have been received per second on the public interfaces of the hosts.',
  }),
  tx: i18n.translate('xpack.infra.hostsViewPage.metrics.tooltip.tx', {
    defaultMessage:
      'Number of bytes which have been sent per second on the public interfaces of the hosts.',
  }),
};

export const TABLE_COLUMN_LABEL = {
  title: i18n.translate('xpack.infra.hostsViewPage.table.nameColumnHeader', {
    defaultMessage: 'Name',
  }),

  cpuUsage: i18n.translate('xpack.infra.hostsViewPage.table.cpuUsageColumnHeader', {
    defaultMessage: 'CPU usage (avg.)',
  }),

  diskSpaceUsage: i18n.translate('xpack.infra.hostsViewPage.table.diskSpaceUsageColumnHeader', {
    defaultMessage: 'Disk Space Usage (avg.)',
  }),

  tx: i18n.translate('xpack.infra.hostsViewPage.table.txColumnHeader', {
    defaultMessage: 'TX (avg.)',
  }),

  rx: i18n.translate('xpack.infra.hostsViewPage.table.rxColumnHeader', {
    defaultMessage: 'RX (avg.)',
  }),

  memoryFree: i18n.translate('xpack.infra.hostsViewPage.table.memoryFreeColumnHeader', {
    defaultMessage: 'Memory Free (avg.)',
  }),

  memoryUsage: i18n.translate('xpack.infra.hostsViewPage.table.memoryUsageColumnHeader', {
    defaultMessage: 'Memory Usage (avg.)',
  }),

  normalizedLoad1m: i18n.translate('xpack.infra.hostsViewPage.table.normalizedLoad1mColumnHeader', {
    defaultMessage: 'Normalized Load (avg.)',
  }),

  toggleDialogAction: i18n.translate('xpack.infra.hostsViewPage.table.toggleDialogWithDetails', {
    defaultMessage: 'Toggle dialog with details',
  }),
};
