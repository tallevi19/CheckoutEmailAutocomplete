import { useState } from "react";
import {
  reactExtension,
  useEmail,
  BlockStack,
  InlineStack,
  Pressable,
  Text,
  Banner,
} from "@shopify/ui-extensions-react/checkout";

const EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "icloud.com",
  "aol.com",
  "protonmail.com",
  "mail.com",
  "zoho.com",
  "yandex.com",
];

export default reactExtension(
  "purchase.checkout.contact.render-after",
  () => <EmailAutocomplete />,
);

function EmailAutocomplete() {
  const email = useEmail();
  const [selectedEmail, setSelectedEmail] = useState(null);

  // Only show suggestions when user has typed "@" but hasn't finished the domain
  const currentEmail = email ?? "";
  const atIndex = currentEmail.lastIndexOf("@");

  if (atIndex === -1 || atIndex === 0) {
    return null;
  }

  const localPart = currentEmail.substring(0, atIndex);
  const domainPart = currentEmail.substring(atIndex + 1);

  // Don't show if domain already looks complete (has a dot and chars after it)
  if (domainPart.includes(".") && domainPart.split(".").pop().length >= 2) {
    return null;
  }

  // Filter domains that match what's been typed so far
  const suggestions = EMAIL_DOMAINS.filter(
    (domain) =>
      domain.startsWith(domainPart.toLowerCase()) && domain !== domainPart.toLowerCase(),
  );

  if (suggestions.length === 0) {
    return null;
  }

  // Show at most 4 suggestions
  const visibleSuggestions = suggestions.slice(0, 4);

  return (
    <BlockStack spacing="tight">
      <Text size="small" appearance="subdued">
        Did you mean?
      </Text>
      <InlineStack spacing="tight">
        {visibleSuggestions.map((domain) => (
          <Pressable
            key={domain}
            border="base"
            cornerRadius="base"
            padding={["extraTight", "tight"]}
            onPress={() => setSelectedEmail(`${localPart}@${domain}`)}
          >
            <Text size="small">
              {localPart}@<Text size="small" emphasis="bold">{domain}</Text>
            </Text>
          </Pressable>
        ))}
      </InlineStack>
      {selectedEmail && (
        <Banner status="info">
          <Text>Complete your email: {selectedEmail}</Text>
        </Banner>
      )}
    </BlockStack>
  );
}
