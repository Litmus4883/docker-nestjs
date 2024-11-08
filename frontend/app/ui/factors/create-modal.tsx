'use client';

import { Button, Modal, Tabs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import CreateForm from './create-form';

export default function CreateModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="要因の新規作成">
        <Tabs defaultValue="motivator">
          <Tabs.List>
            <Tabs.Tab value="motivator">モチベーター</Tabs.Tab>
            <Tabs.Tab value="stressor">ストレッサー</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="motivator">
            <CreateForm factors={'motivator'} />
          </Tabs.Panel>
          <Tabs.Panel value="stressor">
            <CreateForm factors={'stressor'} />
          </Tabs.Panel>
        </Tabs>
      </Modal>

      <Button className="mr-auto px-4" onClick={open}>
        新規作成
      </Button>
    </>
  );
}
