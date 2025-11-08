import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchAboutData } from "@/lib/mock-api";
import { cacheLife } from "next/cache";

export async function OurTeam() {
  "use cache";
  cacheLife("hours");
  const data = await fetchAboutData();

  return data.map((member, index) => (
    <Card
      key={member.name}
      className="transition-all hover:shadow-md"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <CardHeader>
        <div className="flex items-center gap-4 mb-2">
          <Avatar className="size-12 text-base">
            {member.image && (
              <AvatarImage src={member.image} alt={member.name} />
            )}
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {member.initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle className="text-lg">{member.name}</CardTitle>
            <CardDescription>{member.role}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed">{member.bio}</p>
      </CardContent>
    </Card>
  ));
}
