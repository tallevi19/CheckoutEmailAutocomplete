import { Page, Layout, Card, Text, BlockStack, List } from "@shopify/polaris";

export default function Index() {
  return (
    <Page title="Checkout Email Autocomplete">
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="300">
              <Text as="h2" variant="headingMd">
                How it works
              </Text>
              <Text as="p" variant="bodyMd">
                This extension adds smart email autocomplete suggestions to your
                checkout email field. When a customer types "@" in the email
                field, popular email domain suggestions appear automatically.
              </Text>
              <Text as="h3" variant="headingSm">
                Supported email domains
              </Text>
              <List type="bullet">
                <List.Item>gmail.com</List.Item>
                <List.Item>yahoo.com</List.Item>
                <List.Item>outlook.com</List.Item>
                <List.Item>hotmail.com</List.Item>
                <List.Item>icloud.com</List.Item>
                <List.Item>aol.com</List.Item>
                <List.Item>protonmail.com</List.Item>
                <List.Item>mail.com</List.Item>
                <List.Item>zoho.com</List.Item>
                <List.Item>yandex.com</List.Item>
              </List>
            </BlockStack>
          </Card>
        </Layout.Section>

        <Layout.Section variant="oneThird">
          <Card>
            <BlockStack gap="200">
              <Text as="h2" variant="headingMd">
                Setup
              </Text>
              <Text as="p" variant="bodyMd">
                The extension is automatically active on your checkout page once
                installed. No additional configuration is needed.
              </Text>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
