import CoinPageContainer from "@/components/pageComponents/CoinPage/CoinPageContainer";

export default async function CoinPage({ params }) {
  const coin = await params;
  return <CoinPageContainer coindId={coin.id} />;
}
