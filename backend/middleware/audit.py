from fastapi import Request
from typing import Optional, Dict, Any
from datetime import datetime

async def log_audit(request: Request, action: str, target_collection: str, target_id: str, changes: Optional[Dict[str, Any]] = None):
    workshop_id = getattr(request.state, 'workshop_id', None)
    user_id = getattr(request.state, 'user_id', None)

    if not workshop_id or not user_id:
        print("Warning: Audit log attempted without valid tenant context.")
        return

    audit_entry = {
        "user_id": user_id,
        "action": action,
        "target_collection": target_collection,
        "target_id": target_id,
        "timestamp": datetime.utcnow().isoformat(),
        "ip_address": request.client.host if request.client else "unknown",
        "changes": changes
    }

    # MOCK IMPLEMENTATION
    # await db.collection("workshops").document(workshop_id).collection("audit_logs").add(audit_entry)
    print(f"[AUDIT LOG] {workshop_id}: {audit_entry}")
