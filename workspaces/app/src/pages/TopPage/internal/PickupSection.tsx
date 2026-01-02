import { FeatureCard } from '../../../features/feature/components/FeatureCard';
import { useFeatureList } from '../../../features/feature/hooks/useFeatureList';
import { Box } from '../../../foundation/components/Box';
import { Flex } from '../../../foundation/components/Flex';
import { Space } from '../../../foundation/styles/variables';

const PickupSection: React.FC = () => {
  const { data: featureList } = useFeatureList({ query: {} });

  return (
    <Box maxWidth="100%" overflowX="scroll" overflowY="hidden">
      <Flex align="stretch" direction="row" gap={Space * 2} justify="flex-start">
        {featureList.map((feature) => (
          <FeatureCard key={feature.id} book={feature.book} />
        ))}
      </Flex>
    </Box>
  );
};

export default PickupSection;
