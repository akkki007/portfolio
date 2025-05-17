    import { Badge } from "@/components/ui/badge";

    export function SkillBadge({ name }) {
    return (
        <Badge variant="outline" className="bg-background/80 hover:bg-background/90 transition-colors">
        {name}
        </Badge>
    );
    }
