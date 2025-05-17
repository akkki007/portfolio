import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ title, description, image, tags, link }) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Link
            href={link}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform"
          >
            View Project
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <CardContent className="p-5 space-y-3">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
