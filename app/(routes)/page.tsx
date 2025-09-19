import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard("3b6aa8d6-6faf-4f01-ba61-b0da55e837dc");

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            </div>
        </Container>
    )
}

export default HomePage;