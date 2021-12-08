<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> ADD </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <DnsModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getDNSColumns, searchFormSchema } from './networkData';
  import { useModal } from '/@/components/Modal';
  import { dnsListApi } from '/@/api/main/network/dns';
  import DnsModal from './DnsModal.vue';
  export default defineComponent({
    name: 'DNSManagement',
    components: { BasicTable, DnsModal, TableAction },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: 'DNS TABLE',
        api: dnsListApi,
        columns: getDNSColumns(),
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        pagination: true,
        striped: true,
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        canResize: false,
        actionColumn: {
          width: 80,
          title: 'OPERATIONAL',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        console.log(record);
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
